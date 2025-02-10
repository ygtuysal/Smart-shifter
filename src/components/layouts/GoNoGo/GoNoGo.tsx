import React, {
  useCallback,
  useTransition,
  lazy,
  Suspense,
  useReducer,
} from 'react';
import {
  Paper,
  Tabs,
  Tab,
  Divider,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FullScreenLoader from '../../shared/FullScreenLoader';

const ProductionRelease = lazy(
  () => import('./tabs/ProductionRelease/ProductionRelease'),
);
const OrderStatus = lazy(() => import('./tabs/OrderStatus/OrderStatus'));

interface State {
  selectedTab: number;
  isLoading: boolean;
  isDialogOpen: boolean;
  isProductionReleased: boolean;
  isWarningDialogOpen: boolean;
}

type Action =
  | { type: 'SET_TAB'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'TOGGLE_DIALOG' }
  | { type: 'TOGGLE_WARNING' }
  | { type: 'RELEASE_PRODUCTION' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_TAB':
      return { ...state, selectedTab: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'TOGGLE_DIALOG':
      return { ...state, isDialogOpen: !state.isDialogOpen };
    case 'TOGGLE_WARNING':
      return { ...state, isWarningDialogOpen: !state.isWarningDialogOpen };
    case 'RELEASE_PRODUCTION':
      return { ...state, isProductionReleased: true, isDialogOpen: true };
    default:
      return state;
  }
};

const GoNoGo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    selectedTab: 0,
    isLoading: false,
    isDialogOpen: false,
    isProductionReleased: false,
    isWarningDialogOpen: false,
  });

  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback(
    (_event: React.SyntheticEvent, newValue: number) => {
      if (!state.isProductionReleased) {
        dispatch({ type: 'TOGGLE_WARNING' });
        return;
      }
      dispatch({ type: 'SET_TAB', payload: newValue });
    },
    [state.isProductionReleased],
  );

  const handleConfirmRelease = useCallback(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
    startTransition(() => {
      setTimeout(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'RELEASE_PRODUCTION' });
      }, 2000);
    });
  }, []);

  return (
    <>
      <Paper elevation={3} sx={{ padding: 2, width: '100%' }}>
        <Tabs value={state.selectedTab} onChange={handleChange}>
          <Tab label="Go / No Go Decision for Production release" />
          <Tab label="Order Status" />
        </Tabs>
        <Divider sx={{ marginY: 2 }} />

        <Suspense fallback={<FullScreenLoader />}>
          {state.selectedTab === 0 && (
            <ProductionRelease
              isProductionReleased={state.isProductionReleased}
              isLoading={state.isLoading}
              isWarningDialogOpen={state.isWarningDialogOpen}
              handleConfirmRelease={handleConfirmRelease}
              handleRevertRelease={() =>
                dispatch({ type: 'RELEASE_PRODUCTION' })
              }
            />
          )}
          {state.selectedTab === 1 && <OrderStatus />}
        </Suspense>
      </Paper>

      {state.isLoading && <FullScreenLoader />}

      <Dialog
        open={state.isDialogOpen}
        onClose={() => dispatch({ type: 'TOGGLE_DIALOG' })}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ textAlign: 'center', padding: 4 }}>
          <CheckCircleRoundedIcon sx={{ fontSize: 60, color: '#4CAF50' }} />
          <Typography variant="h6" sx={{ marginY: 2, fontWeight: 'bold' }}>
            Saved Successfully
          </Typography>
          <Typography variant="body1">
            Production has been released. Please review the latest updates to
            verify.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#4CAF50', color: 'white', paddingX: 4 }}
            onClick={() => dispatch({ type: 'TOGGLE_DIALOG' })}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={state.isWarningDialogOpen}
        onClose={() => dispatch({ type: 'TOGGLE_WARNING' })}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent sx={{ textAlign: 'center', padding: 4 }}>
          <CloseRoundedIcon sx={{ fontSize: 60, color: '#F23700' }} />
          <Typography variant="h6" sx={{ marginY: 2, fontWeight: 'bold' }}>
            Unsaved Changes
          </Typography>
          <Typography variant="body1">
            Production has not been released. Please complete the necessary
            steps or contact support if you need assistance.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#F23700', color: 'white', paddingX: 4 }}
            onClick={() => dispatch({ type: 'TOGGLE_WARNING' })}
          >
            Try Again
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GoNoGo;

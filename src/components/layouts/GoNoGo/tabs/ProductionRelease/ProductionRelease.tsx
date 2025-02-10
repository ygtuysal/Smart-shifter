import React, { useCallback } from 'react';
import { Button, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import SubdirectoryArrowLeftRoundedIcon from '@mui/icons-material/SubdirectoryArrowLeftRounded';
import SubdirectoryArrowRightRoundedIcon from '@mui/icons-material/SubdirectoryArrowRightRounded';
import DotLoader from '../../../../shared/DotLoader';

interface ProductionReleaseProps {
  isProductionReleased: boolean;
  isLoading: boolean;
  isWarningDialogOpen: boolean;
  handleConfirmRelease: () => void;
  handleRevertRelease: () => void;
}

const ProductionRelease: React.FC<ProductionReleaseProps> = ({
  isProductionReleased,
  isLoading,
  isWarningDialogOpen,
  handleConfirmRelease,
  handleRevertRelease,
}) => {
  const handleClick = useCallback(() => {
    if (isProductionReleased) {
      handleRevertRelease();
    } else {
      handleConfirmRelease();
    }
  }, [isProductionReleased, handleConfirmRelease, handleRevertRelease]);
  return (
    <Grid2 container spacing={2} sx={{ width: '100%' }}>
      <Grid2 xs={8}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            backgroundColor: isWarningDialogOpen
              ? '#FEF3F2'
              : isProductionReleased
                ? '#E8F5E9'
                : '#FFE4E8',
            padding: '1rem',
            borderRadius: '0.5rem',
          }}
        >
          {!isLoading &&
            (isProductionReleased ? (
              <CheckCircleRoundedIcon sx={{ color: '#4CAF50' }} />
            ) : (
              <ReportProblemRoundedIcon sx={{ color: '#C11574' }} />
            ))}

          <Typography
            variant="body1"
            sx={{
              color: isWarningDialogOpen
                ? '#F23700'
                : isProductionReleased
                  ? '#4CAF50'
                  : '#C11574',
            }}
          >
            {isProductionReleased ? (
              'Production Released'
            ) : (
              <>
                {!isLoading && 'Production is not released yet'}
                {isLoading && (
                  <span
                    style={{
                      marginLeft: 8,
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    <DotLoader
                      colors={['#FF0000', '#00FF00', '#0000FF']}
                      size={8}
                      duration={0.4}
                    />
                  </span>
                )}
              </>
            )}
          </Typography>
        </motion.div>
      </Grid2>

      <Grid2
        xs={4}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={
              !isLoading &&
              (isProductionReleased ? (
                <SubdirectoryArrowLeftRoundedIcon />
              ) : (
                <SubdirectoryArrowRightRoundedIcon />
              ))
            }
            onClick={handleClick}
            sx={{ padding: '1rem' }}
          >
            {isLoading ? (
              <DotLoader
                colors={['#FFFFFF', '#FFFFFF', '#FFFFFF']}
                size={8}
                duration={0.4}
              />
            ) : isProductionReleased ? (
              'Revert and Unpublish Production'
            ) : (
              'Confirm and Release Production'
            )}
          </Button>
        </motion.div>
      </Grid2>
    </Grid2>
  );
};

export default ProductionRelease;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { withSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { snacksSelector } from "../../stores/uiSlice/selectors";

export const UnconnectedSnackController = ({ enqueueSnackbar, snacks }) => {
  const [displayedSnacks, setSnackDisplayed] = useState({});
  useEffect(() => {
    snacks.forEach((snack) => {
      if (displayedSnacks[snack.key]) return;
      displayedSnacks[snack.key] = snack;
      setSnackDisplayed(displayedSnacks);
      enqueueSnackbar(snack.message, {
        ...snack.options,
        key: snack.key,
      });
    });
  }, [snacks, displayedSnacks, enqueueSnackbar]);
  return null;
};

const mapStateToProps = (state) => {
  return {
    snacks: snacksSelector(state),
  };
};

export default connect(
  mapStateToProps,
  {}
)(withSnackbar(UnconnectedSnackController));

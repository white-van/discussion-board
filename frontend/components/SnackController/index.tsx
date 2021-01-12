/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// @ts-ignore
import { withSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { snacksSelector } from "../../stores/uiSlice/selectors";
import { Snack } from "../../stores/uiSlice/types";

interface SnackControllerProps {
  enqueueSnackbar?: (message: string, options) => void;
  snacks: Snack[];
}

export const UnconnectedSnackController: React.FC<SnackControllerProps> = ({
  enqueueSnackbar,
  snacks,
}) => {
  const [displayedSnacks, setSnackDisplayed] = useState({});
  useEffect(() => {
    snacks.forEach((snack) => {
      if (displayedSnacks[snack.key]) return;
      displayedSnacks[snack.key] = snack;
      setSnackDisplayed(displayedSnacks);
      enqueueSnackbar(snack.message, {
        ...snack.options,
        autoHideDuration: 5000,
        key: snack.key,
      });
    });
  }, [snacks, displayedSnacks, enqueueSnackbar]);
  return null;
};

const mapState = (state) => ({
  snacks: snacksSelector(state) as Snack[],
});

export default connect(mapState, {})(withSnackbar(UnconnectedSnackController));

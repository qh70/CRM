import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export default function Delete({ deletepopup, setDeletepopup, modules }) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleClose = () => {
    setDeletepopup(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={deletepopup}
        onClose={handleClose}
      >
        <div className="wordAddProductInDialog">確定刪除公司資料嗎？</div>
        <DialogActions>
          <Button color="primary">是的</Button>
          <Button onClick={handleClose} color="warning">不是</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

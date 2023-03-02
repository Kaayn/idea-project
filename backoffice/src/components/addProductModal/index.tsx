import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ProductForm } from "../productForm";
import { Dispatch, SetStateAction } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ProductModalProps = {
  setRefresh: Dispatch<SetStateAction<boolean>>;
  refresh: boolean;
};

export const AddProductModal = ({ setRefresh, refresh }: ProductModalProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" sx={{backgroundColor: "red", fontSize: 20}}>
        + Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="flex text-black my-32 m-auto bg-white w-96 border-solid border-2 border-black shadow-xl h-auto">
          <ProductForm
            setRefresh={setRefresh}
            refresh={refresh}
            setOpenModal={setOpen}
          />
        </div>
      </Modal>
    </div>
  );
};

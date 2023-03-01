import * as React from 'react';
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import {DialogActions, DialogContent, Drawer} from "@mui/material";
import {useState} from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <Container maxWidth="lg">
      <Button onClick={() => setOpen(true)}>Test drawer</Button>
      <Drawer variant="custom" open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          Drawer contents
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Drawer>
    </Container>
  );
}

'use client'
import Button from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { useState } from "react";

export default function Home() {
  const [open,setOpen] = useState(false)
  return (
    <div>
      <h1>Title</h1>
      <Button label='button' onClick={()=>{setOpen(true)}}></Button>
      <Modal useOverlay={true} open={open} duration={{common: .15}} onClose={()=>{setOpen(false)}}>
        <div>Modal
        <Button label='button' onClick={()=>{setOpen(false)}}></Button>
        </div>
      </Modal>
      {/* <Option label='Option' value="bb" onClick={()=>{}}/> */}
    </div>
  );
}

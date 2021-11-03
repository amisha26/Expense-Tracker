import React, { useState, useContext, useEffect } from 'react';

const NewTransactionForm = () => {
 
  const createTransaction = () => {
  
    

  

      

    

  return (
    <Grid container spacing={2}>
      <Snackbar open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
        {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
         {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
        </Typography>
      </Grid>
     

      
  );
};

export default NewTransactionForm;

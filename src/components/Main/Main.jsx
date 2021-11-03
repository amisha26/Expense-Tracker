import React, { useState, useEffect, useContext } from 'react';

const ExpenseTracker = () => {
  
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance Rs {balance}</Typography>
      
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
    
    </Card>
  );
};

export default ExpenseTracker;

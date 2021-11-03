import React, { useContext } from 'react';


const List = () => {

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            
            
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;

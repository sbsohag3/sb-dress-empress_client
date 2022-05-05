import React from 'react';

const MysingleItem = ({product}) => {
  const {name, price, stock, seller} = product
  return (
    
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
         
        </tbody>
      </table>
    
  );
};

export default MysingleItem;
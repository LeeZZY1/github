import React from 'react';
import {Button} from 'antd';
import {useAsyncFn} from 'react-use';
import fly from 'flyio';

export default function() {
  
  const [state, fetch] = useAsyncFn(async () => {
    console.log("111")
    let resp=await fly.post('/jsonrpc/', {
      "jsonrpc": "2.0", "method": "Counter.Get", "params": {}, "id": 2
    })
    return resp.data
  });
  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <Button type="primary" onClick={fetch}>Add</Button>
    </div>
  );
}

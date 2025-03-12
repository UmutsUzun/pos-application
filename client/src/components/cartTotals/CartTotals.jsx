import { Button } from 'antd'
import React from 'react'
import {ClearOutlined, PlusCircleOutlined , MinusCircleOutlined} from "@ant-design/icons"

const Cart_Totals = () => {
  return (
    <div className='cart h-full max-h-[calc(100vh_-_90px)] flex flex-col '>
      <h2 className='bg-blue-600 text-center py-4 text-white'>Items in the basket</h2>
      <ul className='cart_items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto'>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fYfP1KwUDZt1T%20a_
            lcPqiyHKScAXFOkdub8JqAfO-S4oek5MJJQmKS9Mh5bIV0uWrM9M&usqp=CAU" alt="" 
            className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-2'>
              <b>Apple</b>
              <span>£1.5 x 6</span>
            </div>            
          </div>
          <div className='flex items-center gap-x-1'>
          <Button type="primary" size="small"
          className='w-full flex items-center
          justify-center !rounded-full'
          icon ={<PlusCircleOutlined />}/>
          <span className='font-bold '>1</span>
          <Button type="primary" size="small"
          className='w-full  flex items-center
          justify-center !rounded-full'
          icon ={<MinusCircleOutlined />}/>
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fYfP1KwUDZt1T%20a_
            lcPqiyHKScAXFOkdub8JqAfO-S4oek5MJJQmKS9Mh5bIV0uWrM9M&usqp=CAU" alt="" 
            className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-2'>
              <b>Apple</b>
              <span>£1.5 x 6</span>
            </div>            
          </div>
          <div className='flex items-center gap-x-1'>
          <Button type="primary" size="small"
          className='w-full flex items-center
          justify-center !rounded-full'
          icon ={<PlusCircleOutlined />}/>
          <span className='font-bold '>1</span>
          <Button type="primary" size="small"
          className='w-full  flex items-center
          justify-center !rounded-full'
          icon ={<MinusCircleOutlined />}/>
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fYfP1KwUDZt1T%20a_
            lcPqiyHKScAXFOkdub8JqAfO-S4oek5MJJQmKS9Mh5bIV0uWrM9M&usqp=CAU" alt="" 
            className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-2'>
              <b>Apple</b>
              <span>£1.5 x 6</span>
            </div>            
          </div>
          <div className='flex items-center gap-x-1'>
          <Button type="primary" size="small"
          className='w-full flex items-center
          justify-center !rounded-full'
          icon ={<PlusCircleOutlined />}/>
          <span className='font-bold '>1</span>
          <Button type="primary" size="small"
          className='w-full  flex items-center
          justify-center !rounded-full'
          icon ={<MinusCircleOutlined />}/>
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fYfP1KwUDZt1T%20a_
            lcPqiyHKScAXFOkdub8JqAfO-S4oek5MJJQmKS9Mh5bIV0uWrM9M&usqp=CAU" alt="" 
            className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-2'>
              <b>Apple</b>
              <span>£1.5 x 6</span>
            </div>            
          </div>
          <div className='flex items-center gap-x-1'>
          <Button type="primary" size="small"
          className='w-full flex items-center
          justify-center !rounded-full'
          icon ={<PlusCircleOutlined />}/>
          <span className='font-bold '>1</span>
          <Button type="primary" size="small"
          className='w-full  flex items-center
          justify-center !rounded-full'
          icon ={<MinusCircleOutlined />}/>
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fYfP1KwUDZt1T%20a_
            lcPqiyHKScAXFOkdub8JqAfO-S4oek5MJJQmKS9Mh5bIV0uWrM9M&usqp=CAU" alt="" 
            className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-2'>
              <b>Apple</b>
              <span>£1.5 x 6</span>
            </div>            
          </div>
          <div className='flex items-center gap-x-1'>
          <Button type="primary" size="small"
          className='w-full flex items-center
          justify-center !rounded-full'
          icon ={<PlusCircleOutlined />}/>
          <span className='font-bold '>1</span>
          <Button type="primary" size="small"
          className='w-full  flex items-center
          justify-center !rounded-full'
          icon ={<MinusCircleOutlined />}/>
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fYfP1KwUDZt1T%20a_
            lcPqiyHKScAXFOkdub8JqAfO-S4oek5MJJQmKS9Mh5bIV0uWrM9M&usqp=CAU" alt="" 
            className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-2'>
              <b>Apple</b>
              <span>£1.5 x 6</span>
            </div>            
          </div>
          <div className='flex items-center gap-x-1'>
          <Button type="primary" size="small"
          className='w-full flex items-center
          justify-center !rounded-full'
          icon ={<PlusCircleOutlined />}/>
          <span className='font-bold '>1</span>
          <Button type="primary" size="small"
          className='w-full  flex items-center
          justify-center !rounded-full'
          icon ={<MinusCircleOutlined />}/>
          </div>
        </li>
        <li className='cart-item flex justify-between'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fYfP1KwUDZt1T%20a_
            lcPqiyHKScAXFOkdub8JqAfO-S4oek5MJJQmKS9Mh5bIV0uWrM9M&usqp=CAU" alt="" 
            className='w-16 h-16 object-cover' />
            <div className='flex flex-col ml-2'>
              <b>Apple</b>
              <span>£1.5 x 6</span>
            </div>            
          </div>
          <div className='flex items-center gap-x-1'>
          <Button type="primary" size="small"
          className='w-full flex items-center
          justify-center !rounded-full'
          icon ={<PlusCircleOutlined />}/>
          <span className='font-bold '>1</span>
          <Button type="primary" size="small"
          className='w-full  flex items-center
          justify-center !rounded-full'
          icon ={<MinusCircleOutlined />}/>
          </div>
        </li>      
        
      </ul>
      <div className="cart-totals mt-auto">
        <div className='border-t '>
          <div className='flex justify-between p-2'>
            <b>Subtotal:</b>
            <span>£9</span>
          </div>
          <div className='flex justify-between p-2 '>
            <b>Tax:</b>
            <span className='text-red-700'> +£1.40</span>
          </div>
        </div>
        <div className='border-b mt-4'> 
          <div className='flex justify-between p-2 border-t'>
            <b className='text-xl text-green-500'>Total:</b>
            <span className='text-xl'>£9</span>
          </div>
        </div>
        <div className="py-4 px-2"> 
          <Button type="primary" size="large"
          className='w-full'>New Order</Button>
          <Button type="primary" size="large"
          className='w-full mt-2 flex items-center'
          icon ={<ClearOutlined />} danger>Remove</Button>
        </div>
      </div>    
    </div>
  )
}

export default Cart_Totals



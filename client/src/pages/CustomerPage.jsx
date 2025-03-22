import Header from "../components/header/Header.jsx"
import {Table } from "antd"
import {useState,useEffect} from "react";

const CustomerPage = () => {
    const [invoiceItems,setInvoiceItems] = useState([]);

      useEffect(()=> {
        const getBills = async () => {
          try {
            const res= await fetch ("http://localhost:5000/api/invoices/get-all")
            const data = await res.json();
            setInvoiceItems(data)
          } catch (error) {
            console.log(error)
            
          }
        };
    
        getBills()
    
      }, []);
  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'customerPhoneNumber',
      key: 'customerPhoneNumber',
    },
    {
      title: 'Date of Issue',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render:(text) => {
        return(text.substring(0,10))
      }
    },
  ];
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Customers</h1>
        <Table dataSource={invoiceItems}
         columns={columns} 
         bordered pagination={false} />    
      </div>
      
    </>

  );
};

export default CustomerPage;
import {useState,useEffect} from "react"
import Header from "../components/header/Header.jsx"
import {Table, Button } from "antd"
import PrintInvoice from "../components/Invoices/PrintInvoices.jsx";

const InvoicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [invoiceItems,setInvoiceItems] = useState([]);
  const[customer,setCustomer] = useState()

  console.log(customer)

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
  console.log(invoiceItems);
 
  const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'customerPhoneNumber',
      key: 'age',
    },
    {
      title: 'Creation Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text)=>{
        return <span>{text.substring(0,10)}</span>
      }
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMode',
      key: 'paymentMode',
    },
    {
      title: 'Total Amount',
      dataIndex: 'subTotal',
      key: 'subTotal',
      render: (text)=>{
        return <span>£{text}</span>
      }
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: (_,record)=>{
        return (
        <Button 
        type="link" 
        className="pl-0" 
        onClick={()=> {
          setIsModalOpen(true);
          setCustomer(record);
        }}
        >
          Print

        </Button>
        );
      }
    },
  ];
  console.log(isModalOpen);
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Invoices</h1>
        <Table 
        dataSource={invoiceItems}
         columns={columns} 
         bordered 
         pagination={false}
         scroll={{
          x:1000,
          y:300

         }}
          />    
      </div>
      <PrintInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
      customer={customer} />
      
    </>

  );
};

export default InvoicePage;

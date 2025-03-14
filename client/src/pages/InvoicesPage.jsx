import {useState} from "react"
import Header from "../components/header/Header.jsx"
import {Table, Card , Button } from "antd"
import PrintInvoice from "../components/Invoices/PrintInvoices.jsx";

const InvoicePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
;
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  console.log(isModalOpen);
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Invoices</h1>
        <Table dataSource={dataSource}
         columns={columns} 
         bordered pagination={false} />
        <div className="CartTotal flex justify-end mt-4">
        <Card className="w-72">
          <Button className="mt-4 w-full" type="primary" size="large"
          onClick={() => setIsModalOpen(true)}
          >Print</Button>         
        </Card>       
       </div>      
      </div>
      <PrintInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      
    </>

  );
};

export default InvoicePage;

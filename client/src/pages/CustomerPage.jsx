import Header from "../components/header/Header.jsx"
import {Table,Input,Button,Space,Spin } from "antd"
import {useState,useEffect,useRef} from "react";
import {SearchOutlined} from "@ant-design/icons";
import Highlighter from 'react-highlight-words';

const CustomerPage = () => {
    const [invoiceItems,setInvoiceItems] = useState();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);




    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = clearFilters => {
      clearFilters();
      setSearchText('');
    };
  
    const getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      filterDropdownProps: {
        onOpenChange(open) {
          if (open) {
            setTimeout(() => {
              var _a;
              return (_a = searchInput.current) === null || _a === void 0 ? void 0 : _a.select();
            }, 100);
          }
        },
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
  

      useEffect(()=> {
        const getBills = async () => {
          try {
            const res= await fetch (process.env.REACT_APP_SERVER_URL + "/api/invoices/get-all")
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
      ...getColumnSearchProps('customerName')
    },
    {
      title: 'Phone Number',
      dataIndex: 'customerPhoneNumber',
      key: 'customerPhoneNumber',
      ...getColumnSearchProps('customerPhoneNumber')
    },
    {
      title: 'Date of Issue',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render:(text) => {
        return(text.substring(0,10))
      },
    },
  ];
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-4">Customers</h1>
    {invoiceItems ? (
            <div className="px-6">
            <Table 
            dataSource={invoiceItems}
            columns={columns} 
            bordered 
            pagination={false}
            scroll={{
              x : 1000,
              y : 300,
            }}
            rowKey="_id"
              />    
          </div>
    ):(
      <Spin size="large" className="absolute top-1/2 h-screen w-screen flex 
         justify-center" />
    )}
      
    </>

  );
};

export default CustomerPage;
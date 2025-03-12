import { Modal, Button } from "antd";
const PrintInvoice = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Print Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Invoice Details:</p>
                  <p>221B Baker Street</p>
                  <p>London, NW1 6XE</p>
                  <p>United Kingdom</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Invoice:</p>
                  <p>30 Marylebone Road</p>
                  <p>London, NW1 5LZ</p>
                  <p>United Kingdom</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Invoice Number:</p>
                    <p> GB-INV-789654</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">
                      Date of Issue:
                    </p>
                    <p>24/05/2023</p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold text-slate-700">Terms</p>
                    <p>3 days</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Due:</p>
                    <p>13/06/2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Picture
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Product
                    </th>
                    <th
                      colSpan={4}
                      scope="col"
                      className="py-3.5 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 text-end text-sm font-normal text-slate-700 md:pl-0"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img
                        src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4 sm:table-cell hidden">
                      <div className="flex flex-col">
                        <span className="font-medium">Apple</span>
                        <span className="sm:hidden inline-block text-xs">
                        Unit Price £2
                        </span>
                      </div>
                    </td>
                    <td className="py-4 sm:hidden" colSpan={4}>
                      <div className="flex flex-col">
                        <span className="font-medium">Apple</span>
                        <span className="sm:hidden inline-block text-xs">
                          Unit Price £2
                        </span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>£2</span>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span>4</span>
                    </td>

                    <td className="py-4 text-end">
                      <span>£8</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        Subtotal
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Subtotal</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">£8</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">Tax</span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Tax</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-600">+£0.50</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      className="text-right pt-4 sm:table-cell hidden"
                      colSpan="4"
                      scope="row"
                    >
                      <span className="font-normal text-slate-700">
                        Total
                      </span>
                    </th>
                    <th
                      className="text-left pt-4 sm:hidden"
                      scope="row"
                      colSpan="4"
                    >
                      <p className="font-normal text-slate-700">Total</p>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">£8.50</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Payment terms are 14 days. Under the Late Payment of
                    Unpackaged Debts Act 2023, freelancers are entitled to claim
                    a late payment fee of £00.00 if debts are not settled within
                    this period. In addition, a revised invoice will be issued
                    with this fee included. If the revised invoice remains
                    unpaid after 14 days, an additional interest charge will be
                    applied to the overdue balance at a rate of 8% statutory
                    interest plus the Bank of England base rate of 0.5%,
                    totaling 8.5%. Parties cannot contract out of the provisions
                    of the Act
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large">
          Print
        </Button>
      </div>
    </Modal>
  );
};

export default PrintInvoice;

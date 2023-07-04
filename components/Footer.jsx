import React from 'react';

export default function Footer() {
  return (
    <div className="px-setting mt-6 py-10  flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-20 justify-between border-t border-slate-200">
      <div className="w-full md:w-1/2">
        <h3>Store</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat culpa ut iure sint dolor unde itaque quam recusandae ex assumenda, dicta eum nobis nostrum eius magnam harum neque libero!</p>
      </div>
      <div className="w-full md:w-1/2">
        <h3>Another Shoop</h3>
        <p>Facebook</p>
        <p>Shoope</p>
        <p>Tokopedia</p>
        <p>Lazada</p>
      </div>
    </div>
  );
}

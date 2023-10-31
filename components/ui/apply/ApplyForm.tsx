import { useApplyForm } from '@/hooks/useApplyForm';
import { log } from 'console';
import { useFormik } from 'formik';
import SelectProvinces from './SelectProvinces';
import SelectDistricts from './SelectDistricts';
import SelectWards from './SelectWards';


export const ApplyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      dday:'',
      sex: '',
      idcard:'',
      nation:'',
      religion:'',
      province: '',
      district:'',
      wards:'',
      phoneNumber: '',
      image: '',
      note: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));

      //put
    },
  });

  console.log(formik)
  console.log(formik.values)


  
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
    >
      <div className="col-span-2">
        <label
          htmlFor="first-name"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Họ và tên
        </label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Họ và tên"
          type="text"
          name="name"
          id="name"
          autoComplete="given-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* {formik.touched.name && formik.errors.name && (
          <div className="text-red-600">{formik.errors.name}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="dday"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Ngày sinh
        </label>
        <div className="mt-2.5">
          <input
            value={formik.values.dday}
            onChange={formik.handleChange}
            placeholder="YYYY/MM/DD"
            type="text"
            name="dday"
            pattern='\d{4}-\d{2}-\d{2}'
            id="dday"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {/* {formik.touched.dday && formik.errors.dday && (
            <div className="text-red-600">{formik.errors.dday}</div>
          )} */}
        </div>
      </div>

      <div className="col-span-2">
        <label
          htmlFor="sex"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Giới tính
        </label>
        <input
          value="female"
          onChange={formik.handleChange}
          placeholder="Giới tính"
          type="radio"
          name="sex"
          id="Female"
          autoComplete="off"
        // className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="nu"> Nữ </label>
        <br />
        <input
          value="male"
          onChange={formik.handleChange}
          placeholder="Giới tính"
          type="radio"
          name="sex"
          id="Male"
          autoComplete="off"
        // className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <label htmlFor="Nam"> Nam</label>
        {/* {formik.touched.sex && formik.errors.sex && (
          <div className="text-red-600">{formik.errors.sex}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="idcard"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Mã định danh
        </label>
        <input
          value={formik.values.idcard}
          onChange={formik.handleChange}
          placeholder="Mã định danh"
          type="text"
          name="idcard"
          id="idcard"
          autoComplete="off"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* {formik.touched.idcard && formik.errors.idcard && (
          <div className="text-red-600">{formik.errors.idcard}</div>
        )} */}
      </div>
{/* -----------------------------------------dang lam ne------------------------------------------------------------- */}
      <div className="col-span-2">
        <label
          htmlFor="nation"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Dân tộc
        </label>
        <select 
        name="nation" 
        id="nation"
        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Chọn dân tộc</option>
        </select>
        {/* {formik.touched.nation && formik.errors.nation && (
          <div className="text-red-600">{formik.errors.nation}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="religion"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Tôn giáo
        </label>
        <select 
        name="religion" 
        id="regilion"
        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Chọn tôn giáo</option>
        </select>
        {/* {formik.touched.religion && formik.errors.religion && (
          <div className="text-red-600">{formik.errors.religion}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <SelectProvinces label="Tỉnh/Thành phố" placeholder="Chọn tỉnh/thành phố" value={formik.values.province} onChange={formik.handleChange}/>
        {/* {formik.touched.province && formik.errors.province && (
          <div className="text-red-600">{formik.errors.province}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <SelectDistricts label="Quận/Huyện" placeholder="Chọn Quận/Huyện" value={formik.values.district} onChange={formik.handleChange} provinceName={formik.values.province}/>
        {/* {formik.touched.district && formik.errors.district && (
          <div className="text-red-600">{formik.errors.district}</div>
        )} */}
      </div>

      <div className="col-span-2">
      <SelectWards label="Xã/Phường" placeholder="Chọn Xã/Phường" value={formik.values.wards} onChange={formik.handleChange} provinceName={formik.values.province} districtName={formik.values.district}/>
        
        {/* {formik.touched.wards && formik.errors.wards && (
          <div className="text-red-600">{formik.errors.wards}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="phone-number"
          className="block text-sm font-semibold leading-6 text-gray-900 ring-indigo-600"
        >
          Số điện thoại
        </label>
        <input
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          placeholder="Số điện thoại"
          type="phoneNumber"
          name="phoneNumber"
          id="phoneNumber"
          autoComplete="phoneNumber"
          className="block w-full rounded-md border-0  px-3.5 py-2 pl-4   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className="text-red-600">{formik.errors.phoneNumber}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="image"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Hình ảnh
        </label>
        <input
          value={formik.values.image}
          onChange={formik.handleChange}
          placeholder="Hình ảnh"
          type="file"
          name="image"
          id="image"
          autoComplete="off"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* {formik.touched.image && formik.errors.image && (
          <div className="text-red-600">{formik.errors.image}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="religion"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Đợt sát hạch
        </label>
        <select 
        name="examination" 
        id="examination"
        className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Chọn đợt sát hạch</option>
        </select>
        {/* {formik.touched.religion && formik.errors.religion && (
          <div className="text-red-600">{formik.errors.religion}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="note"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Ghi chú
        </label>
        <textarea
          value={formik.values.note}
          onChange={formik.handleChange}
          placeholder="Ghi chú"
          name="note"
          id="note"
          rows={4}
          className="block w-full rounded-md  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* {formik.touched.note && formik.errors.note && (
          <div className="text-red-600">{formik.errors.note}</div>
        )} */}
      </div>
      <div className="col-span-2 mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Gửi
        </button>
      </div>
    </form>
  );
};

'use client'

import { useFormik } from 'formik';
import SelectProvinces from './SelectProvinces';
import SelectDistricts from './SelectDistricts';
import SelectWards from './SelectWards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_SERVER } from '../../../constant'
import { useRouter } from 'next/router';


export const ApplyForm = () => {
    const router = useRouter()
  const [avatarImg, setAvatarImg] = useState<File | null>(null)
  const [religions, setReligions] = useState([])
  const [nations, setNations] = useState([])
  const [examinations, setExaminations] = useState([])
  const formik = useFormik({
    initialValues: {
      name: '',
      dateofbirth: '',
      sex: '',
      idcard: '',
      nation_id: '',
      religion_id: '',
      province: '',
      district: '',
      wards: '',
      phone: '',
      // image: '',
      note: '',
      examinations_id: '',
    },
    onSubmit: values => {
      console.log(avatarImg)
      console.log(JSON.stringify(values, null, 2));
      const form = new FormData();
      form.append('name', values.name);
      form.append('dateofbirth', values.dateofbirth);
      form.append('sex', values.sex);
      form.append('idcard', values.idcard);
      form.append('phone', values.phone);
      form.append('image', avatarImg);
      form.append('note', values.note);
      form.append('nation_id', values.nation_id);
      form.append('religion_id', values.religion_id);
      form.append('province', values.province);
      form.append('district', values.district);
      form.append('wards', values.wards);
      form.append('examinations_id', values.examinations_id);
      //post api


      axios.post(`${URL_SERVER}/profile`, form, {headers: { "Content-Type": "multipart/form-data" },
    }
      )
        .then(() => {
            router.push('/')
         })
        .catch(err => console.log(err))
    },
  });

  useEffect(() => {
    axios.get(`${URL_SERVER}/religion`)
      .then(response => {
        setReligions(response.data)
      })
      .catch(err => console.log(err))


    axios.get(`${URL_SERVER}/nation`)
      .then(response => {
        setNations(response.data)
      })
      .catch(err => console.log(err))

    axios.get(`${URL_SERVER}/examination`)
      .then(response => {
        setExaminations(response.data)
      })
      .catch(err => console.log(err))
  }, [])


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
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-600">{formik.errors.name}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="dateofbirth"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Ngày sinh
        </label>
        <div className="mt-2.5">
          <input
            value={formik.values.dateofbirth}
            onChange={formik.handleChange}
            placeholder="YYYY/MM/DD"
            type="text"
            name="dateofbirth"
            pattern='\d{4}-\d{2}-\d{2}'
            id="dateofbirth"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {formik.touched.dateofbirth && formik.errors.dateofbirth && (
            <div className="text-red-600">{formik.errors.dateofbirth}</div>
          )}
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
        />
        <label htmlFor="Nam"> Nam</label>
        {formik.touched.sex && formik.errors.sex && (
          <div className="text-red-600">{formik.errors.sex}</div>
        )}
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
        {formik.touched.idcard && formik.errors.idcard && (
          <div className="text-red-600">{formik.errors.idcard}</div>
        )}
      </div>
      <div className="col-span-2">
        <label
          htmlFor="nation_id"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Dân tộc
        </label>
        <select
          name="nation_id"
          id="nation_id"
          value={formik.values.nation_id}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Chọn dân tộc</option>
          {nations?.map(nation_id => <option key={nation_id.id} value={nation_id.id}>{nation_id.nationName}</option>)}
        </select>
        {formik.touched.nation_id && formik.errors.nation_id && (
          <div className="text-red-600">{formik.errors.nation_id}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="religion_id"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Tôn giáo
        </label>
        <select
          name="religion_id"
          id="religion_id"
          value={formik.values.religion_id}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Chọn tôn giáo</option>
          {religions?.map(religion_id => <option key={religion_id.id} value={religion_id.id}>{religion_id.religionName}</option>)}
        </select>
        {formik.touched.religion_id && formik.errors.religion_id && (
          <div className="text-red-600">{formik.errors.religion_id}</div>
        )}
      </div>

      <div className="col-span-2">
        <SelectProvinces label="Tỉnh/Thành phố" placeholder="Chọn tỉnh/thành phố" value={formik.values.province} onChange={formik.handleChange} />
        {formik.touched.province && formik.errors.province && (
          <div className="text-red-600">{formik.errors.province}</div>
        )}
      </div>

      <div className="col-span-2">
        <SelectDistricts label="Quận/Huyện" placeholder="Chọn Quận/Huyện" value={formik.values.district} onChange={formik.handleChange} provinceName={formik.values.province} />
        {formik.touched.district && formik.errors.district && (
          <div className="text-red-600">{formik.errors.district}</div>
        )}
      </div>

      <div className="col-span-2">
        <SelectWards label="Xã/Phường" placeholder="Chọn Xã/Phường" value={formik.values.wards} onChange={formik.handleChange} provinceName={formik.values.province} districtName={formik.values.district} />
        {formik.touched.wards && formik.errors.wards && (
          <div className="text-red-600">{formik.errors.wards}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="phone"
          className="block text-sm font-semibold leading-6 text-gray-900 ring-indigo-600"
        >
          Số điện thoại
        </label>
        <input
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Số điện thoại"
          type="phone"
          name="phone"
          id="phone"
          autoComplete="phone"
          className="block w-full rounded-md border-0  px-3.5 py-2 pl-4   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-600">{formik.errors.phone}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="image"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Hình ảnh
        </label>
        <input
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              const img = e.target.files[0];
              setAvatarImg(img);
          }}}
          placeholder="Hình ảnh"
          type="file"
          name="image"
          id="image"
          autoComplete="off"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {/* {formik.touched.image && formik.errors.image && (
          <div className="text-red-600">{formik.errors.image}</div>
        )} */}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="examinations_id"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Đợt sát hạch
        </label>
        <select
          name="examinations_id"
          id="examinations_id"
          value={formik.values.examinations_id}
          onChange={formik.handleChange}
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option value="">Chọn đợt sát hạch</option>
          {examinations.map(item => <option key={item.id} value={item.id}>{item.examinationsName}</option>)}
        </select>
        {formik.touched.examinations_id && formik.errors.examinations_id && (
          <div className="text-red-600">{formik.errors.examinations_id}</div>
        )}
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

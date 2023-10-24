import { useApplyForm } from '@/hooks/useApplyForm';

export const ApplyForm = () => {
  const formik = useApplyForm();
  return (
    <form
      onSubmit={formik.handleSubmit}
      action="#"
      method="POST"
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
            placeholder="Ngày sinh"
            type="date"
            name="dateofbirth"
            id="dateofbirth"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
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
          value={formik.values.sex}
          onChange={formik.handleChange}
          placeholder="Giới tính"
          type="radio"
          name="sex"
          id="sex"
          autoComplete="off"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.sex && formik.errors.sex && (
          <div className="text-red-600">{formik.errors.sex}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="id"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Mã định danh
        </label>
        <input
          value={formik.values.sex}
          onChange={formik.handleChange}
          placeholder="Mã định danh"
          type="text"
          name="id"
          id="id"
          autoComplete="name"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.id && formik.errors.id && (
          <div className="text-red-600">{formik.errors.id}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="nation"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Dân tộc
        </label>
        <input
          value={formik.values.nation}
          onChange={formik.handleChange}
          placeholder="Dân tộc"
          type="text"
          name="nation"
          id="nation"
          autoComplete="name"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.nation && formik.errors.nation && (
          <div className="text-red-600">{formik.errors.nation}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="religion"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Tôn giáo
        </label>
        <input
          value={formik.values.religion}
          onChange={formik.handleChange}
          placeholder="Tôn giáo"
          type="text"
          name="religion"
          id="religion"
          autoComplete="name"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.religion && formik.errors.religion && (
          <div className="text-red-600">{formik.errors.religion}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="province"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Tỉnh/Thành phố
        </label>
        <input
          value={formik.values.province}
          onChange={formik.handleChange}
          placeholder="Tỉnh/Thành phố"
          type="text"
          name="province"
          id="province"
          autoComplete="address-level2"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.province && formik.errors.province && (
          <div className="text-red-600">{formik.errors.province}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="district"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Quận/Huyện
        </label>
        <input
          value={formik.values.district}
          onChange={formik.handleChange}
          placeholder="Tỉnh/Thành phố"
          type="text"
          name="district"
          id="district"
          autoComplete="address-line2"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.district && formik.errors.district && (
          <div className="text-red-600">{formik.errors.district}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="wards"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Xã/Phường
        </label>
        <input
          value={formik.values.province}
          onChange={formik.handleChange}
          placeholder="Xã/Phường"
          type="text"
          name="wards"
          id="wards"
          autoComplete="address-line1"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.province && formik.errors.province && (
          <div className="text-red-600">{formik.errors.province}</div>
        )}
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
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <div className="text-red-600">{formik.errors.phoneNumber}</div>
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
          value={formik.values.image}
          onChange={formik.handleChange}
          placeholder="Hình ảnh"
          type="file"
          name="image"
          id="image"
          autoComplete="off"
          className="block w-full rounded-md border-0   px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.image && formik.errors.image && (
          <div className="text-red-600">{formik.errors.image}</div>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Ghi chú
        </label>
        <textarea
          value={formik.values.message}
          onChange={formik.handleChange}
          placeholder="Ghi chú"
          name="message"
          id="message"
          rows={4}
          className="block w-full rounded-md  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-600">{formik.errors.message}</div>
        )}
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

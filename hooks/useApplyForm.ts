import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useApplyForm = () => {
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
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Ít nhất có 2 ký tự")
      .max(15, "Tối đa 30 ý tự").required('Bạn phải nhập họ và tên!'),
      dday: Yup.string().required('Bạn phải nhập ngày sinh!'),
      sex: Yup.string().required('Bạn phải chọn giới tính!'),
      idcard:Yup.string().min(2, "Mã định danh có ít nhất 9 số!")
      .max(15, "Mã định danh có nhiều nhất 12 số!").required('Bạn phải nhập mã số định danh!'),
      nation: Yup.string().required('Bạn phải chọn dân tộc!'),
      religion: Yup.string().required('Bạn phải chọn tôn giáo!'),
      province: Yup.string().required('Bạn phải chọn tỉnh/thành phố!'),
      district: Yup.string().required('Bạn phải chọn quận/huyện!'),
      wards: Yup.string().required('Bạn phải chọn xã phường!'),
      phoneNumber: Yup.string().required('Bạn phải nhập số điện thoại!'),
      image: Yup.string().required('Bạn phải tải ảnh lên!'),
      note: Yup.string().required('Bạn phải nhập ghi chú!'),

    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return formik;
};

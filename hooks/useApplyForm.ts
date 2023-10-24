import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useApplyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      dateofbirth:'',
      sex: '',
      id:'',
      nation:'',
      religion:'',
      province: '',
      district:'',
      wards:'',
      phoneNumber: '',
      image: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Bạn phải nhập họ và tên!'),
      dateofbirth: Yup.string().required('Bạn phải nhập ngày sinh!'),
      sex: Yup.string().required('Bạn phải nhập giới tính!'),
      id:Yup.string().required('Bạn phải nhập mã số định danh!'),
      nation: Yup.string().required('Bạn phải chọn dân tộc!'),
      religion: Yup.string().required('Bạn phải chọn tôn giáo!'),
      province: Yup.string().required('Bạn phải chọn tỉnh/thành phố!'),
      district: Yup.string().required('Bạn phải chọn quận/huyện!'),
      wards: Yup.string().required('Bạn phải chọn xã phường!'),
      phoneNumber: Yup.string().required('Bạn phải nhập số điện thoại!'),
      image: Yup.string().required('Bạn phải tải ảnh lên!'),
      message: Yup.string().required('Bạn phải nhập ghi chú!'),

    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return formik;
};

import { useFormik } from 'formik';
import * as Yup from 'yup';

export const useApplyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      dateofbirth:'',
      sex: '',
      idcard:'',
      nation_id:'',
      religion_id:'',
      province: '',
      district:'',
      wards:'',
      phone: '',
      email:'',
      image: '',
      file:'',
      note: '',
      examinations_id:'',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Ít nhất có 2 ký tự")
      .max(40, "Tối đa 30 ý tự").required('Bạn phải nhập họ và tên!'),
      dateofbirth: Yup.string().required('Bạn phải nhập ngày sinh!'),
      sex: Yup.string().required('Bạn phải chọn giới tính!'),
      idcard:Yup.string().min(2, "Mã định danh có ít nhất 9 số!")
      .max(15, "Mã định danh có nhiều nhất 12 số!").required('Bạn phải nhập mã số định danh!'),
      nation_id: Yup.string().required('Bạn phải chọn dân tộc!'),
      religion_id: Yup.string().required('Bạn phải chọn tôn giáo!'),
      province: Yup.string().required('Bạn phải chọn tỉnh/thành phố!'),
      district: Yup.string().required('Bạn phải chọn quận/huyện!'),
      wards: Yup.string().required('Bạn phải chọn xã phường!'),
      phone: Yup.string().required('Bạn phải nhập số điện thoại!'),
      email: Yup.string().email('Bạn phải nhập email đúng định dạng!'),
      image: Yup.string().required('Bạn phải tải ảnh lên!'),
      file: Yup.string().required('Bạn phải tải phiếu sức khỏe lên!'),
      note: Yup.string().required('Bạn phải nhập ghi chú!'),
      examinations_id: Yup.string().required("Bạn phải chọn đợt sát hạch!")

    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return formik;
};

import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { modalStyles } from './styles';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicModal from '../../common/BasicModal/BasicModal';

const defaultInputValues = {
  userId: '',
  email: '',
  phoneNumber: '',
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const NewUserModal = ({ open, onClose, addNewUser }) => {
  const [values, setValues] = useState(defaultInputValues);

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required('User ID is Required')
      .min(6, 'User Id must be at least 6 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is invalid'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors
  } = useForm({ resolver: yupResolver(validationSchema) });

  const addUser = (data) => {
    console.log(data);
    addNewUser({...data});
  };

  const handleChange = (value) => {
    setValues(value);
  };

  useEffect(() => {
    if (open) {
      console.log('infinite loop');
      setValues(defaultInputValues);
      clearErrors();
    }
  }, [open, clearErrors]);

  const getContent = () => {
    return (
      <Box sx={modalStyles.inputFields}>
        <TextField
          placeholder='User ID'
          name='userId'
          label='User ID'
          required
          {...register('userId')}
          error={errors.userId ? true : false}
          helperText={errors.userId?.message}
          value={values.userId}
          onChange={(ev) =>
            handleChange({ ...values, userId: ev.target.value })
          }
        />
        <TextField
          placeholder='e-mail'
          name='email'
          label='E-mail'
          required
          {...register('email')}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
          value={values.email}
          onChange={(ev) => handleChange({ ...values, email: ev.target.value })}
        />
        <TextField
          placeholder='Phone Number'
          name='phoneNumber'
          label='Phone Number'
          required
          {...register('phoneNumber')}
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
          value={values.phoneNumber}
          onChange={(ev) =>
            handleChange({ ...values, phoneNumber: ev.target.value })
          }
        />
      </Box>
    );
  };

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title='New User'
      subTitle='Fill out inputs and hit "submit" button.'
      content={getContent()}
      onSubmit={handleSubmit(addUser)}
    ></BasicModal>
  );
};

export default NewUserModal;

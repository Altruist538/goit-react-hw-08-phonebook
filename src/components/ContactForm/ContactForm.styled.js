import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  width: 400px;
  flex-wrap: wrap;
  border: 1px solid #5d9969;
  border-radius: 4px;
  font-weight: bold;
  align-content: center;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;
  border-radius: 4px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

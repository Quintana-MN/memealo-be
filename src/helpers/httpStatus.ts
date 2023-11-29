import type { CustomResponseData, CustomResponseMessage, CustomResponseMessageError } from '@/types/response'

enum HttpStatus {
  OK= 200,
  CREATED= 201,
  BAD_REQUEST= 400,
  UNAUTHORIZED= 401,
  FORBIDDEN= 403,
  NOT_FOUND= 404,
  UNPROCESSABLE_ENTITY= 422,
  INTERNAL_SERVER_ERROR= 500
} 

export const httpResponse = {
  OK: (res: CustomResponseData, data: any) => {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMsg: 'Success',
      data
    })
  },
  CREATED: (res: CustomResponseData, data: any) => {
    return res.json({
      status: HttpStatus.CREATED,
      statusMsg: 'Created',
      data
    })
  },
  BAD_REQUEST: (res: CustomResponseMessageError, message: string, errorData: any) => {
    return res.json({
      status: HttpStatus.BAD_REQUEST,
      statusMsg: 'Bad Request',
      message,
      error: errorData
    })
  },
  UNAUTHORIZED: (res: CustomResponseMessage, message: string) => {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMsg: 'Unauthorized',
      message
    })
  },
  FORBIDDEN: (res: CustomResponseMessage, message: string) => {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMsg: 'Forbidden',
      message
    })
  },
  NOT_FOUND: (res: CustomResponseMessage, message: string) => {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMsg: 'Not Found',
      message
    })
  },
  UNPROCESSABLE_ENTITY: (res: CustomResponseMessageError, message: string, errorData: any) => {
    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      statusMsg: 'Unprocessable Entity',
      message,
      error: errorData
    })
  },
  INTERNAL_SERVER_ERROR: (res: CustomResponseMessageError, message: string, error: any) => {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMsg: 'Internal Server Error',
      message,
      error: error.message
    })
  }
}

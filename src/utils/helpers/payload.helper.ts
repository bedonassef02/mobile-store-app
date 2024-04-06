import { Payload } from "../dtos/payload.dto"
import { UserDto } from "../dtos/user.dto"

export const createPayload = (UserDto: UserDto): Payload=>{
    return {
        id: UserDto.id,
        email: UserDto.email
    }
}
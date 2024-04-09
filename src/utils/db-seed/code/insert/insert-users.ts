import { readFile } from '../helper';
import { authService } from '../../../ioc/services.ioc';
import { SignUpDto } from '../../../dtos/auth/sign-up.dto';

export const insertUsers = async () => {
  try {
    const usersEntries: SignUpDto[] = readFile('users.json');

    for (const user of usersEntries) {
      await authService.signUp(user);
    }
    console.log('Users data inserted successfully');
  } catch (error: any) {
    console.error('Error inserting Users data:', error.message);
  }
};

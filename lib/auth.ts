type User = {
  id: string;
  email: string;
  role: 'ADMIN' | 'ASSESSOR' | 'ADM' | 'APPLICANT';
};

export async function signIn(email: string, password: string): Promise<User | null> {
  // Basic authentication check
  if (email === 'admin' && password === 'admin') {
    return {
      id: '1',
      email: 'admin',
      role: 'ADMIN'
    };
  }
  return null;
}
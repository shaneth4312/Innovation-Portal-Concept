type User = {
  id: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ADM' | 'ASSESSOR' | 'APPLICANT';
};

export async function signIn(email: string, password: string): Promise<User | null> {
  // Check if password matches the standard password
  if (password !== 'password') {
    return null;
  }

  // Map of valid users with their roles
  const users: Record<string, User> = {
    'superadmin': {
      id: '1',
      email: 'superadmin',
      role: 'SUPER_ADMIN'
    },
    'adm': {
      id: '2',
      email: 'adm',
      role: 'ADM'
    },
    'assessor': {
      id: '3',
      email: 'assessor',
      role: 'ASSESSOR'
    },
    'applicant': {
      id: '4',
      email: 'applicant',
      role: 'APPLICANT'
    }
  };

  // Return the user if email exists in our users map
  return users[email] || null;
}
import { handleGithubLogin, handleLogOut } from '@/lib/action'
import { auth } from '@/lib/auth'

const LoginPage = async () => {
  const session = await auth()

  // console.log('session', session)

  // const handleGitLogin = async () => {
  //   'use server'
  //   await signIn('github')
  // }

  // const handleGitLogOut = async () => {
  //   'use server'
  //   await signOut()
  // }

  return (
    <div>
      <h1>{session?.user?.name || 'нет никого'}</h1>
      <form action={handleGithubLogin}>
        <button>Login with CitHub</button>
      </form>

      <form action={handleLogOut}>
        <button>LogOut with CitHub</button>
      </form>
    </div>
  )
}

export default LoginPage

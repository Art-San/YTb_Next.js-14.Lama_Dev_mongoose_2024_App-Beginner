export const authConfig = {
  pages: {
    signIn: '/login'
  },
  providers: [],
  callbacks: {
    // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.isAdmin = user.isAdmin
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
      }
      return session
    },
    authorized({ auth, request }) {
      const user = auth?.user
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin')
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog')
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login')

      // Только админ имеет доступ панели администратора

      if (isOnAdminPanel && !user?.isAdmin) {
        return false
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      // только аутентифицированные пользователи МОГУТ ПОЛУЧИТЬ СТРАНИЦу блога

      if (isOnBlogPage && !user) {
        return false
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      // ТОЛЬКО НЕ АУТЕНТИФИЦИРОВАННЫЕ ПОЛЬЗОВАТЕЛИ МОГУТ достигнуть НА СТРАНИЦУ ВХОДА

      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl))
      }

      return true
    }
  }
}

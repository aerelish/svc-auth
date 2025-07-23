import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  return (
    <div className="w-screen h-screen bg-bg-dark flex items-center justify-center px-4">
      <div className='w-full max-w-sm sm:max-w-md'>
        <Card>
          <h1 className='font-rajdhani text-4xl font-medium mb-8'>Login</h1>
          <form
            action=""
            className="flex flex-col gap-2"
          >
            <Input name='username' />
            <Input name='pasword' type='password' />
            <div className='flex gap-1 mt-4'>
              <Button>Login</Button>
              <Button variants='secondary'>Register</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default App

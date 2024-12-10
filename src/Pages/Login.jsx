import React, { useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { LockIcon, Mail } from 'lucide-react'

const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(2, {
        message: 'Password must be at least 2 characters.',
    }),
})

const Login = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    function onSubmit(values) {
        setIsLoading(true)
        setIsError(false)
        console.log(values)
    }

    const onError = (errors, e) =>{
        setIsLoading(true)
        console.log("Error found ")
        setIsError(true)
    }

    return (
        <div className=" h-full w-full flex justify-center items-center">
            <Card className="w-96 px-2 py-8 ">
                <CardContent>
                    <div className="flex justify-center items-center">
                        <img
                            src="https://redconnect.v14livestaging.redroadhbs.org/assets/rhrms/images/redroadicon.svg"
                            alt="logo"
                            className="w-36"
                        />
                    </div>
                    <div className="text-center my-8 font-semibold">
                        <h4>Login to REDROAD</h4>
                    </div>
                    <div>
                        <Form {...form}>
                            <form className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <div className="flex items-center border-2 rounded-sm bg-input-bg px-2 ">
                                                <Mail className="text-gray-400" />
                                                <FormControl>
                                                    <Input
                                                        className="border-none shadow-none focus-visible:ring-transparent space-0 mt-0"
                                                        placeholder="jane@example.com"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <div className="flex items-center border-2 rounded-sm bg-input-bg px-2 ">
                                                <LockIcon className="text-gray-400" />
                                                <FormControl>
                                                    <Input
                                                        className="border-none shadow-none focus-visible:ring-transparent space-0 mt-0"
                                                        placeholder="•••••"
                                                        type={showPassword ? "text" : "password"}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <span className='text-xs cursor-pointer text-gray-400' onClick={() => setShowPassword(!showPassword)}>show</span>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                    <div className="flex justify-center mt-5 w-full">
                        <Button
                            className="w-full bg-primary-blue hover:bg-primary-blue" 
                            onClick={form.handleSubmit(onSubmit, onError)}
                        >
                            {isError ? 'Invalid Login. Try again.' : isLoading ? 'Loading...' : 'Login'}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
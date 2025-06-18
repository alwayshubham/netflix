import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue } from '../ui/select'
import { SelectItem } from '@radix-ui/react-select'
import { Button } from '../ui/button'

const UploadFormFields = () => {
    const ispanding = true;
  return (
    <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6"> Add New Movie</h1>

        <form action="">
            <div className="space-y-2">
                <Label htmlFor='movieName'  className="block mb-2">
                    Movie Name
                </Label>
                <Input
                id='movieName'
                name='movieName'
                placeholder='Enter movie name' 
                />
            </div>
             <div className="space-y-2">
                <Label htmlFor='description'  className="block mb-2">
                    Description
                </Label>
                <Input
                id='description'
                name='description'
                placeholder='Enter movie name' 
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor='description'  className="block mb-2">
                    Description
                </Label>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="action">Trailer</SelectItem>
                        <SelectItem value="comedy">Popilar</SelectItem>
                        <SelectItem value="drama"> Upcoming</SelectItem>
                        <SelectItem value="drama">Trending</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='space-y-6'>
                <Label> Thumbnail File</Label>
                {/* Upload */}
            </div>
            <Button type='submit' className='w-full' disabled={ispanding}>{ispanding ? "Submite": "submit movie"}</Button>
        </form>

    </div>
  )
}

export default UploadFormFields
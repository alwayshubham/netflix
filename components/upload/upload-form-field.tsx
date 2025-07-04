"use client";
import { uploadVideo } from "@/action/upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Upload from "@/components/upload/upload-imagekit";
import { useActionState, useState } from "react";

const UploadVideoFormFields = () => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [thumbnailUrl, setThumbnailUrl] = useState<string>("");
  const [formState, action, isPending] = useActionState(uploadVideo, {
    errors: {},
  });
  const onSubmitHandler = (formData: FormData) => {
    // add videoUrl in formData
    formData.append("videoUrl", videoUrl);
    formData.append("thumbnailUrl", thumbnailUrl);
    return action(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Movie</h1>

      <form action={onSubmitHandler} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="movieName">Movie Name</Label>
          <Input
            id="movieName"
            name="movieName"
            placeholder="Enter movie name"
          />
          {formState.errors.movieName && (
            <p className="text-red-500 text-sm">{formState.errors.movieName}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter movie description"
            rows={4}
          />
          {formState.errors.description && (
            <p className="text-red-500 text-sm">
              {formState.errors.description}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select name="category">
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trailer">Trailer</SelectItem>
              <SelectItem value="popular">Popular Movies</SelectItem>
              <SelectItem value="upcoming">Upcoming Movies</SelectItem>
              <SelectItem value="trending">Trending Now</SelectItem>
            </SelectContent>
          </Select>
          {formState.errors.category && (
            <p className="text-red-500 text-sm">{formState.errors.category}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Thumbnail File</Label>
          <Upload setThumbnailUrl = {setThumbnailUrl} />
          {
            formState.errors.thumbnailUrl && (
              <p className="text-red-500 text-sm">{formState.errors.thumbnailUrl}</p>
            )
          }
        </div>

        <div className="space-y-2">
          <Label>Movie File</Label>
          <Upload setVideoUrl={setVideoUrl} />
          {
            formState.errors.videoUrl && (
              <p className="text-red-500 text-sm">{formState.errors.videoUrl}</p>
            )
          }
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Movie"}
        </Button>
      </form>
    </div>
  );
};
export default UploadVideoFormFields;
import { Rate, Tag } from 'antd'; 
import { EyeOutlined, CommentOutlined } from '@ant-design/icons';

export function VideoAbout({movie}) {
  return (
    <div className="flex items-start flex-col justify-between p-4 text-white rounded-lg shadow-lg w-full h-full">
      <div className="w-full mb-4">
        <h1 className="text-4xl font-bold mb-2 max-[800px]:text-2xl">{movie.name}</h1>
        <div className="flex items-center space-x-4 text-sm ">
            <>
                <Rate allowHalf defaultValue={5} style={{ color: "#722ED1" }} />
                <span className="text-gray-400">⭐ {movie.imdb}</span>
            </>
          <div className="flex items-center space-x-2">
            <EyeOutlined className="text-gray-400" />
            <span className="text-gray-400">7 Views</span>
            <CommentOutlined className="text-gray-400" />
            <span className="text-gray-400">1</span>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center space-x-4 mb-4">
        <span className="text-gray-400">{movie.year}</span>
        <span className="text-gray-400">{movie.duration}</span>
        <span className="text-gray-400">{movie.language}</span>
        <Tag color="gray">{movie.rating || "TV-MA"}</Tag>
      </div>

      <div className="flex flex-col items-start justify-start gap-2 mb-5">
        <span className="text-gray-400 italic">{movie.genre}</span>
        <p className="mt-2 text-gray-300">{movie.description}</p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-5">
        <p className="text-lg font-semibold">Cast:</p>
        <p className="text-gray-300">{movie.actors.join(", ")}</p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-5">
        <p className="text-lg font-semibold">Crew:</p>
        <p className="text-gray-300">{movie.crew.join(", ")}</p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-5">
        <p className="text-lg font-semibold">Tags:</p>
        <p className="text-gray-300">
          {movie.tags || "Action, Crime, Thriller"}
        </p>
      </div>

    </div>
  );
}

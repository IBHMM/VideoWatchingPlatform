import React, { useState } from 'react';
import { Button, Modal, Table, Form, Input, Upload, Select, Switch, DatePicker, message } from 'antd';
import { useUploadMovieMutation } from '../../../redux/api/admin/movie';
import { useGetAllVideosQuery } from '../../../redux/api/client/movie';
import { UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
import './MovieMain.css'; 
import { genreOptions } from '../../../constants/admin.constants';
import { Loader } from '../../../components/admin/Layout/Animation/Loading';

const { Option } = Select;

export function MovieMain() {
  const { data, isLoading, isError, isSuccess } = useGetAllVideosQuery();
  const [AddMovie, { isLoading: AisLoading }] = useUploadMovieMutation();
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleUploadMovie = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('genre', values.genre);
    formData.append('isAdultContent', values.isAdultContent);
    formData.append('isSubscriptionNeed', values.isSubscriptionNeed);
    formData.append('writer', values.writer);
    formData.append('director', values.director);
    formData.append('cast', values.cast.join(', '));
    formData.append('language', values.language);
    formData.append('duration', values.duration);
    formData.append('score', values.score);
    formData.append('publishedAt', values.publishedAt.format('YYYY-MM-DD'));
    if (thumbnail) {
      formData.append('picture', thumbnail);
    }
    if (videoFile) {
      formData.append('video', videoFile);
    }

    AddMovie(formData)
      .then(() => {
        message.success('Movie uploaded successfully');
        setUploadModalVisible(false);
      })
      .catch(() => {
        message.error('Failed to upload movie');
      });
  };

  const handleAdd = () => {
    setUploadModalVisible(true);
  };

  const handleUploadModalCancel = () => {
    setUploadModalVisible(false);
    setThumbnail(null); // Clear thumbnail
    setVideoFile(null); // Clear video file
  };

  const uploadThumbnailProps = {
    beforeUpload: (file) => {
      setThumbnail(file);
      return false; // Prevent automatic upload
    },
    showUploadList: false,
  };

  const uploadVideoProps = {
    beforeUpload: (file) => {
      setVideoFile(file);
      return false; // Prevent automatic upload
    },
    showUploadList: false,
  };

  const columns = [
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnailUrl',
      key: 'thumbnailUrl',
      render: (text, record) => <img src={record.thumbnailUrl} alt={record.name} style={{ width: 80 }} />,
    },
    {
      title: 'Movie Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Duration (mins)',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Director',
      dataIndex: 'director',
      key: 'director',
    },
    {
      title: 'Writer',
      dataIndex: 'writer',
      key: 'writer',
    },
    {
      title: 'Cast',
      dataIndex: 'cast',
      key: 'cast',
      render: (text) => text.join(', '),
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
    {
      title: 'Published Date',
      dataIndex: 'publishedAt',
      key: 'publishedAt',
      render: (date) => moment(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button type="link" onClick={() => setSelectedMovie(record)}>
          View Details
        </Button>
      ),
    },
  ];

  const handleTableChange = (pagination) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  return (
    <div className="container m-4">
      <h1 className="text-center mb-4">Movies</h1>

      <div className="mb-3">
        <Button type="primary" onClick={handleAdd}>
          Add Movie
        </Button>
      </div>

      {isLoading && <h2 className="text-center">Loading...</h2>}
      {isError && <h2 className="text-center text-danger">Error loading movies</h2>}
      {isSuccess && (
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id"
          pagination={{ current: currentPage, pageSize, total: data.length }}
          onChange={handleTableChange}
        />
      )}

      <Modal
        title={selectedMovie?.name}
        visible={!!selectedMovie}
        footer={null}
        onCancel={() => setSelectedMovie(null)}
        width={800}
      >
        {selectedMovie && (
          <div>
            <video controls width="100%" className="mb-3">
              <source src={selectedMovie.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>{selectedMovie.name}</h3>
            <p><strong>Director:</strong> {selectedMovie.director}</p>
            <p><strong>Genre:</strong> {selectedMovie.genre}</p>
            <p><strong>Duration:</strong> {selectedMovie.duration} mins</p>
            <p><strong>Language:</strong> {selectedMovie.language}</p>
            <p><strong>Writer:</strong> {selectedMovie.writer}</p>
            <p><strong>Cast:</strong> {selectedMovie.cast.join(', ')}</p>
            <p><strong>Published:</strong> {new Date(selectedMovie.publishedAt).toLocaleDateString()}</p>
            <p><strong>Subscription Needed:</strong> {selectedMovie.isSubscriptionNeed ? 'Yes' : 'No'}</p>
          </div>
        )}
      </Modal>

      <Modal
        title="Add New Movie"
        visible={uploadModalVisible}
        footer={null}
        onCancel={handleUploadModalCancel}
        width={600}
      >
        <Form onFinish={handleUploadMovie} layout="vertical">
          <Form.Item
            label="Movie Name"
            name="name"
            rules={[{ required: true, message: 'Please input the movie name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Genre"
            name="genre"
            rules={[{ required: true, message: 'Please select the genre!' }]}
          >
            <Select placeholder="Select a genre">
              {genreOptions.map((genre) => (
                <Option key={genre} value={genre}>{genre}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Adult Content"
            name="isAdultContent"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Subscription Needed"
            name="isSubscriptionNeed"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label="Writer"
            name="writer"
            rules={[{ required: true, message: 'Please input the writer!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Director"
            name="director"
            rules={[{ required: true, message: 'Please input the director!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Cast"
            name="cast"
            rules={[{ required: true, message: 'Please input the cast members!' }]}
          >
            <Select mode="tags" placeholder="Add cast members" />
          </Form.Item>

          <Form.Item
            label="Language"
            name="language"
            rules={[{ required: true, message: 'Please input the language!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Duration (mins)"
            name="duration"
            rules={[{ required: true, message: 'Please input the duration!' }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Score"
            name="score"
            rules={[{ required: true, message: 'Please input the score!' }]}
          >
            <Input type="number" step="0.1" />
          </Form.Item>

          <Form.Item
            label="Published Date"
            name="publishedAt"
            rules={[{ required: true, message: 'Please select the published date!' }]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item label="Thumbnail">
            <Upload {...uploadThumbnailProps} maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Thumbnail</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Video File">
            <Upload {...uploadVideoProps} maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Video</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={AisLoading}>
              Upload
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

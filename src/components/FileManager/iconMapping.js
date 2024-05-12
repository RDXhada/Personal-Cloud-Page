import {
  faFolder,
  faFileAlt,
  faFilePdf,
  faFileImage,
  faFileAudio,
  faFileWord,
  faFilePowerpoint,
  faFileExcel,
  faFileCode,
  faFileArchive,
  faFileVideo
} from '@fortawesome/free-solid-svg-icons';

// Mapping of file extensions to FontAwesome icons
const fileIconMapping = {
  folder: faFolder,
  png: faFileImage,
  jpg: faFileImage,
  jpeg: faFileImage,
  gif: faFileImage,
  svg: faFileImage,
  pdf: faFilePdf,
  mp3: faFileAudio,
  wav: faFileAudio,
  ogg: faFileAudio,
  doc: faFileWord,
  docx: faFileWord,
  ppt: faFilePowerpoint,
  pptx: faFilePowerpoint,
  xls: faFileExcel,
  xlsx: faFileExcel,
  html: faFileCode,
  css: faFileCode,
  js: faFileCode,
  jsx: faFileCode,
  zip: faFileArchive,
  tar: faFileArchive,
  gz: faFileArchive,
  rar: faFileArchive,
  mp4: faFileVideo,
  avi: faFileVideo,
  mov: faFileVideo,
  default: faFileAlt
};

// Mapping of file extensions to colors
const fileIconColor = {
  folder: "#f4b400",
  png: "#f34a33",
  jpg: "#f34a33",
  jpeg: "#f34a33",
  gif: "#f34a33",
  svg: "#f34a33",
  pdf: "#ed1c24",
  mp3: "#1a73e8",
  wav: "#1a73e8",
  ogg: "#1a73e8",
  doc: "#185abc",
  docx: "#185abc",
  ppt: "#d24726",
  pptx: "#d24726",
  xls: "#0f9d58",
  xlsx: "#0f9d58",
  html: "#e44d26",
  css: "#264de4",
  js: "#f0db4f",
  jsx: "#61dafb",
  zip: "#5f6368",
  tar: "#5f6368",
  gz: "#5f6368",
  rar: "#5f6368",
  mp4: "#ff6f00",
  avi: "#ff6f00",
  mov: "#ff6f00",
  default: "#5f6368"
};


const getFileIcon = (file) => {
  const extension = file.name.split('.').pop().toLowerCase();
  const fileType = file.type === 'directory' ? 'folder' : extension;

  return {
    icon: fileIconMapping[fileType] || fileIconMapping['default'],
    color: fileIconColor[fileType] || fileIconColor['default']
  };
};

export { getFileIcon, fileIconMapping, fileIconColor };

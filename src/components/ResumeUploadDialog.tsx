import React, { useState, useRef } from 'react';
import { X, Upload, FileText, Download, Eye, Trash2, CheckCircle } from 'lucide-react';

interface ResumeUploadDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UploadedResume {
  id: string;
  name: string;
  size: number;
  uploadDate: Date;
  file: File;
}

const ResumeUploadDialog: React.FC<ResumeUploadDialogProps> = ({ isOpen, onClose }) => {
  const [uploadedResumes, setUploadedResumes] = useState<UploadedResume[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const file = files[0];
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF or Word document.');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB.');
      return;
    }

    setUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      const newResume: UploadedResume = {
        id: Date.now().toString(),
        name: file.name,
        size: file.size,
        uploadDate: new Date(),
        file: file
      };
      
      setUploadedResumes(prev => [...prev, newResume]);
      setUploading(false);
    }, 1500);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleView = (resume: UploadedResume) => {
    const url = URL.createObjectURL(resume.file);
    window.open(url, '_blank');
  };

  const handleDownload = (resume: UploadedResume) => {
    const url = URL.createObjectURL(resume.file);
    const a = document.createElement('a');
    a.href = url;
    a.download = resume.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDelete = (resumeId: string) => {
    setUploadedResumes(prev => prev.filter(resume => resume.id !== resumeId));
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Upload Your Resume</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
              dragActive 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
            />
            
            {uploading ? (
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600">Uploading your resume...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Drop your resume here, or{' '}
                  <button
                    onClick={onButtonClick}
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    browse
                  </button>
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Supports PDF, DOC, DOCX files up to 5MB
                </p>
                <button
                  onClick={onButtonClick}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Choose File
                </button>
              </div>
            )}
          </div>

          {/* Uploaded Resumes */}
          {uploadedResumes.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Uploaded Resumes ({uploadedResumes.length})
              </h3>
              <div className="space-y-3">
                {uploadedResumes.map((resume) => (
                  <div
                    key={resume.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-blue-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">{resume.name}</h4>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(resume.size)} • Uploaded {resume.uploadDate.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleView(resume)}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-200"
                        title="View Resume"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDownload(resume)}
                        className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-200"
                        title="Download Resume"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(resume.id)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-200"
                        title="Delete Resume"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Tips for a great resume:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Keep it concise and relevant to the position</li>
              <li>• Highlight your technical skills and experience</li>
              <li>• Include specific achievements and metrics</li>
              <li>• Use a clean, professional format</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Submit Application
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadDialog;
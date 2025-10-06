import type { NavItem, ToolCategory, Tool, FeaturedTool } from './types';
// FIX: The 'Compress' icon from lucide-react was causing an error. It has been replaced with 'FileArchive'.
import { FileText, Image, Video, PenSquare, File, Search, Wind, Zap, Scissors, Merge, FileJson2, ArrowDownUp, FileArchive, FileType, CheckSquare, Smile, Edit, ImageUp } from 'lucide-react';

export const navItems: NavItem[] = [
  { name: 'PDF', href: '#' },
  { name: 'Image', href: '#' },
  { name: 'Write', href: '#' },
  { name: 'Video', href: '#' },
  { name: 'File', href: '#' },
];

export const toolCategories: ToolCategory[] = [
  { name: 'PDF Tools', description: 'Solve Your PDF Problems', count: '45+ tools', icon: FileText, color: 'bg-violet-500', featuredTool: 'PDF Creator', href: '#', featuredToolBgColor: 'bg-violet-50', featuredToolTextColor: 'text-violet-600' },
  { name: 'Image Tools', description: 'Solve Your Image Problems', count: '30+ tools', icon: Image, color: 'bg-orange-500', featuredTool: 'Remove BG', href: '#', featuredToolBgColor: 'bg-orange-50', featuredToolTextColor: 'text-orange-600' },
  { name: 'Video Tools', description: 'Solve Your Video Problems', count: '10+ tools', icon: Video, color: 'bg-rose-500', featuredTool: 'Mute Video', href: '#', featuredToolBgColor: 'bg-rose-50', featuredToolTextColor: 'text-rose-600' },
  { name: 'AI Write', description: 'Solve Your Text Problems', count: '10+ tools', icon: PenSquare, color: 'bg-blue-500', featuredTool: 'Paragraph Writer', href: '#', featuredToolBgColor: 'bg-blue-50', featuredToolTextColor: 'text-blue-600' },
  { name: 'File Tools', description: 'Solve Your File Problems', count: '15+ tools', icon: File, color: 'bg-teal-500', featuredTool: 'Split Excel', href: '#', featuredToolBgColor: 'bg-teal-50', featuredToolTextColor: 'text-teal-600' },
];

export const popularTools: Tool[] = [
  { name: 'Essay Writer', category: 'AI Write', description: 'Easily create an essay with AI', icon: PenSquare, categoryColor: 'text-cyan-500', href: '#' },
  { name: 'Content Improver', category: 'AI Write', description: 'Improve your content', icon: Zap, categoryColor: 'text-cyan-500', href: '#' },
  { name: 'Paragraph Writer', category: 'AI Write', description: 'Paragraph Writer', icon: FileText, categoryColor: 'text-cyan-500', href: '#' },
  { name: 'AI Image Generator', category: 'Image Tools', description: 'AI Image Generator', icon: Smile, categoryColor: 'text-orange-500', href: '#' },
  { name: 'Remove Background...', category: 'Image Tools', description: 'Easily Remove the Background from an image', icon: Scissors, categoryColor: 'text-orange-500', href: '#' },
  { name: 'Merge PDF', category: 'PDF Tools', description: 'Merge 2 or more PDF files into a single PDF file', icon: Merge, categoryColor: 'text-indigo-500', href: '#' },
  { name: 'Edit PDF', category: 'PDF Tools', description: 'Free PDF Editor', icon: Edit, categoryColor: 'text-indigo-500', href: '#' },
  { name: 'PDF to JPG', category: 'PDF Tools', description: 'Convert PDF to JPG and download each page as an image', icon: FileJson2, categoryColor: 'text-indigo-500', href: '#' },
  { name: 'JPG to PDF', category: 'PDF Tools', description: 'Upload images and receive as a PDF', icon: ArrowDownUp, categoryColor: 'text-indigo-500', href: '#' },
  { name: 'Upscale Image', category: 'Image Tools', description: 'Increase the resolution of your image', icon: ImageUp, categoryColor: 'text-orange-500', href: '#' },
  { name: 'Compress PDF', category: 'PDF Tools', description: 'Lessen the file size of a PDF file', icon: FileArchive, categoryColor: 'text-indigo-500', href: '#' },
  { name: 'Paragraph Completer', category: 'AI Write', description: 'Paragraph Completer', icon: CheckSquare, categoryColor: 'text-cyan-500', href: '#' },
];

export const toolFilters: string[] = ['All Tools', 'PDF Tools', 'Video Tools', 'Image Tools', 'Converter Tools', 'Other Tools', 'AI Write'];


export const featuredTools: FeaturedTool[] = [
    { name: 'PDF Creator', description: 'Create a PDF quickly and easily with our free PDF creator', imageUrl: 'https://picsum.photos/seed/pdf/400/300', bgColor: 'bg-blue-50', href: '#' },
    { name: 'Background Remover', description: 'Remove or change the background on a photo', imageUrl: 'https://picsum.photos/seed/bg/400/300', bgColor: 'bg-purple-50', href: '#' },
    { name: 'Photo Cleanup', description: 'Use AI to remove unwanted objects, items, people from an image', imageUrl: 'https://picsum.photos/seed/cleanup/400/300', bgColor: 'bg-green-50', href: '#' },
    { name: 'Image Generator', description: 'Generate images from your imagination using AI', imageUrl: 'https://picsum.photos/seed/gen/400/300', bgColor: 'bg-pink-50', href: '#' },
    { name: 'Video Editor', description: 'Edit your videos online with ease', imageUrl: 'https://picsum.photos/seed/video/400/300', bgColor: 'bg-yellow-50', href: '#' },
];

export const footerLinks = {
    navigate: [
        { name: 'Home', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'TOS', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'About', href: '#' },
    ],
    tools: [
        { name: 'Essay Writer', href: '#' },
        { name: 'Content Improver', href: '#' },
        { name: 'Paragraph Writer', href: '#' },
        { name: 'AI Image Generator', href: '#' },
        { name: 'Remove Background from Image', href: '#' },
        { name: 'Merge PDF', href: '#' },
        { name: 'Edit PDF', href: '#' },
        { name: 'PDF to JPG', href: '#' },
        { name: 'JPG to PDF', href: '#' },
        { name: 'Upscale Image', href: '#' },
        { name: 'Compress PDF', href: '#' },
        { name: 'Paragraph Completer', href: '#' },
        { name: 'Remove watermark', href: '#' },
        { name: 'Image To Text', href: '#' },
        { name: 'Split PDF', href: '#' },
        { name: 'Others', href: '#' },
    ]
};
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  techStack = [],
  onLearnMore 
}) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <div className="text-[#e60a11] mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {title}
        </h3>
        <p className="text-slate-500 mb-4">
          {description}
        </p>
        
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={onLearnMore}
        className="flex items-center gap-2"
      >
        Learn More
        <ArrowRight size={16} />
      </Button>
    </Card>
  );
}



export const DemoVideoSection = () => {
  return (
    <>
      <p className="text-muted-foreground mb-8">
        See Campus+ in action through this interactive demo showcasing the full app flow.
      </p>
      
      <div className="max-w-[280px] mx-auto">
        <video 
          className="w-full rounded-[36px]" 
          controls 
          autoPlay
          muted
          loop
          preload="metadata"
          poster="/lovable-uploads/campus_home_page.jpg"
        >
          <source src="/lovable-uploads/campus-plus-flow.mp4" type="video/mp4" />
          <p className="text-muted-foreground text-center py-4">
            Video not available. Please check the video file format and hosting.
          </p>
        </video>
      </div>
    </>
  );
};


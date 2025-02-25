export default function VideoReports() {
    return (
      <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Video Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div>
        </div>
      </section>
    )
  }
  
  
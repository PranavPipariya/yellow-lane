import ClientPlayer from "../../../components/ClientPlayer";

export default function WatchPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Watch</h2>
      <ClientPlayer videoId={id} />
    </div>
  );
}

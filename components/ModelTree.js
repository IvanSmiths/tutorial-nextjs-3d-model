import '@google/model-viewer';

const ModelTree = () => {
  return (
    <div>
      <model-viewer
        src="3d-model.glb"
        camera-controls
        ar
        auto-rotate
        camera-orbit="-9.511deg 86.41deg 1.755m"
        poster="poster.png"
      ></model-viewer>
    </div>
  );
};

export default ModelTree;

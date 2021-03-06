import { CGFappearance, CGFobject, CGFtexture } from "../../../lib/CGF.js";
import { MyQuad } from "../shapes/MyQuad.js";

export class MyUnitCubeQuad extends CGFobject {
  constructor(scene) {
    super(scene);
    this.face = new MyQuad(this.scene);
    this.initMaterials();
  }

  initMaterials() {
    this.texture1 = new CGFtexture(
      this.scene,
      "images/underwater_cubemap/left.jpg"
    );
    this.texture2 = new CGFtexture(
      this.scene,
      "images/underwater_cubemap/bottom.jpg"
    );
    this.texture3 = new CGFtexture(
      this.scene,
      "images/underwater_cubemap/back.jpg"
    );
    this.texture4 = new CGFtexture(
      this.scene,
      "images/underwater_cubemap/right.jpg"
    );
    this.texture5 = new CGFtexture(
      this.scene,
      "images/underwater_cubemap/top.jpg"
    );
    this.texture6 = new CGFtexture(
      this.scene,
      "images/underwater_cubemap/front.jpg"
    );

    this.sideMaterial1 = new CGFappearance(this.scene);
    this.sideMaterial1.setAmbient(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial1.setDiffuse(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial1.setSpecular(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial1.setShininess(0.0);
    this.sideMaterial1.setEmission(1, 1, 1, 1);
    this.sideMaterial1.setTexture(this.texture1);
    this.sideMaterial1.setTextureWrap("REPEAT", "REPEAT");

    this.bottomMaterial = new CGFappearance(this.scene);
    this.bottomMaterial.setAmbient(0.0, 0.0, 0.0, 0.0);
    this.bottomMaterial.setDiffuse(0.0, 0.0, 0.0, 0.0);
    this.bottomMaterial.setSpecular(0.0, 0.0, 0.0, 0.0);
    this.bottomMaterial.setShininess(0.0);
    this.bottomMaterial.setEmission(1, 1, 1, 1);
    this.bottomMaterial.setTexture(this.texture2);
    this.bottomMaterial.setTextureWrap("REPEAT", "REPEAT");

    this.sideMaterial2 = new CGFappearance(this.scene);
    this.sideMaterial2.setAmbient(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial2.setDiffuse(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial2.setSpecular(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial2.setShininess(0.0);
    this.sideMaterial2.setEmission(1, 1, 1, 1);
    this.sideMaterial2.setTexture(this.texture3);
    this.sideMaterial2.setTextureWrap("REPEAT", "REPEAT");

    this.sideMaterial3 = new CGFappearance(this.scene);
    this.sideMaterial3.setAmbient(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial3.setDiffuse(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial3.setSpecular(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial3.setShininess(0.0);
    this.sideMaterial3.setEmission(1, 1, 1, 1);
    this.sideMaterial3.setTexture(this.texture4);
    this.sideMaterial3.setTextureWrap("REPEAT", "REPEAT");

    this.topMaterial = new CGFappearance(this.scene);
    this.topMaterial.setAmbient(0.0, 0.0, 0.0, 0.0);
    this.topMaterial.setDiffuse(0.0, 0.0, 0.0, 0.0);
    this.topMaterial.setSpecular(0.0, 0.0, 0.0, 0.0);
    this.topMaterial.setShininess(0.0);
    this.topMaterial.setEmission(1, 1, 1, 1);
    this.topMaterial.setTexture(this.texture5);
    this.topMaterial.setTextureWrap("REPEAT", "REPEAT");

    this.sideMaterial4 = new CGFappearance(this.scene);
    this.sideMaterial4.setAmbient(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial4.setDiffuse(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial4.setSpecular(0.0, 0.0, 0.0, 0.0);
    this.sideMaterial4.setShininess(0.0);
    this.sideMaterial4.setEmission(1, 1, 1, 1);
    this.sideMaterial4.setTexture(this.texture6);
    this.sideMaterial4.setTextureWrap("REPEAT", "REPEAT");
  }

  updateTexture() {
    if (this.scene.selectLandscape == 0) {
      this.topMaterial.loadTexture("images/underwater_cubemap/top.jpg");
      this.bottomMaterial.loadTexture("images/underwater_cubemap/bottom.jpg");
      this.sideMaterial1.loadTexture("images/underwater_cubemap/left.jpg");
      this.sideMaterial2.loadTexture("images/underwater_cubemap/back.jpg");
      this.sideMaterial3.loadTexture("images/underwater_cubemap/right.jpg");
      this.sideMaterial4.loadTexture("images/underwater_cubemap/front.jpg");
    } else if (this.scene.selectLandscape == 1) {
      this.topMaterial.loadTexture("images/landscape1/top.jpg");
      this.bottomMaterial.loadTexture("images/landscape1/bottom.jpg");
      this.sideMaterial1.loadTexture("images/landscape1/left.jpg");
      this.sideMaterial2.loadTexture("images/landscape1/back.jpg");
      this.sideMaterial3.loadTexture("images/landscape1/right.jpg");
      this.sideMaterial4.loadTexture("images/landscape1/front.jpg");
    } else if (this.scene.selectLandscape == -1) {
      this.topMaterial.loadTexture("images/test_cubemap/py.png");
      this.bottomMaterial.loadTexture("images/test_cubemap/ny.png");
      this.sideMaterial1.loadTexture("images/test_cubemap/nx.png");
      this.sideMaterial2.loadTexture("images/test_cubemap/nz.png");
      this.sideMaterial3.loadTexture("images/test_cubemap/px.png");
      this.sideMaterial4.loadTexture("images/test_cubemap/pz.png");
    }
  }

  display() {
    this.scene.pushMatrix();

    //camara position
    this.scene.translate(
      this.scene.camera.position[0],
      this.scene.camera.position[1],
      this.scene.camera.position[2]
    );
    this.scene.scale(100, 100, 100);

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 0.5);
    this.sideMaterial4.apply();
    this.face.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0, -0.5);
    this.scene.rotate(Math.PI, 0, 1, 0);
    this.sideMaterial2.apply();
    this.face.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0.5, 0);
    this.scene.rotate(-Math.PI / 2, 1, 0, 0);
    this.topMaterial.apply();
    this.face.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, -0.5, 0);
    this.scene.rotate(Math.PI / 2, 1, 0, 0);
    this.bottomMaterial.apply();
    this.face.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0.5, 0, 0);
    this.scene.rotate(Math.PI / 2, 0, 1, 0);
    this.sideMaterial3.apply();
    this.face.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(-0.5, 0, 0);
    this.scene.rotate(-Math.PI / 2, 0, 1, 0);
    this.sideMaterial1.apply();
    this.face.display();
    this.scene.popMatrix();

    this.scene.popMatrix();
  }
}

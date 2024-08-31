{
  description = "A Nix-flake-based Python and Node.js development environment";

  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/0.1.*.tar.gz";

  outputs = { self, nixpkgs }:
    let
      supportedSystems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit system; overlays = [ self.overlays.default ]; };
      });
    in
    {
      overlays.default = final: prev: rec {
        nodejs = prev.nodejs;
        yarn = (prev.yarn.override { inherit nodejs; });
      };

      devShells = forEachSupportedSystem ({ pkgs }: {
        default = pkgs.mkShell {
          venvDir = ".venv";
          packages = with pkgs; [ node2nix nodejs nodePackages.pnpm yarn python311 ] ++
            (with pkgs.python311Packages; [
              pip
              venvShellHook
            ]);
        };
      });
    };
}

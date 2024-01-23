# Python Project Skeleton
In this folder you will find a bunch of configuration files for a new python project.

If you copy any file, make sure to go through them and ensure that any mentioned version matches the project version.

On new projects, use `pyenv` to manage python versions and use `python3 -m venv env` or `python3 -m virtualenv env` to create a virtual environment.

 - `github/workflows/ci.yaml` -> file to run the pre-commit linters on any PR -> to be placed at `.../project/github/workflows/ci.yaml`
 - `gitignore` -> ignore cache and virtual environment files -> to be placed at `.../project/.gitignore`
 - `pre-commit-config.yaml` -> pre commit hook, need to run `pre-commit install` to activate it -> to be placed at `.../project/.pre-commit-config.yaml`
 - `pyproject.toml` -> pre commit linter configuration -> to be placed at `.../project/pyproject.toml`
 - `requirements.in` -> project requirements. Run `pip-compile -o requirements.txt` to generate `requirements.txt` file and then install them with `pip install -r requirements.txt` -> o be placed at `.../project/requirements.in`

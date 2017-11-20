from setuptools import setup, find_packages
import subprocess
import shlex

with open('requirements.txt') as file:
    required = file.read().splitlines()

setup(
    name = 'quero_cultura',
    version = '1.0.0',
    description = 'Sistema para visualização de indicadores da plataforma mapas culturais',
    long_description = '''Sistema para visualização de indicadores da plataforma mapas culturais do Minc''',
    url = 'https://github.com/fga-gpp-mds/2017.2-QueroCultura',
    author = 'Hugo Neves e Josué Nascimento',
    author_email = 'hugonvsc@gmail.com',
    license = 'GPL',

    classifiers=[
        'Development Status :: 1 - Alpha',
        'Intended Audience :: Brazilian guys',
        'Topic :: Indicator platform',
        'License :: OSI Approved :: GPL License',
        'Programming Language :: Python :: 3',
    ],
    keywords='django platform',


    packages=find_packages(exclude=['tests']),

    install_requires=required,

    entry_points={
         'console_scripts': [
             'quero_cultura=quero_cultura.views:start_app',
             'quero_cultura --stop=quero_cultura.views:stop_app',
         ],
     },
)

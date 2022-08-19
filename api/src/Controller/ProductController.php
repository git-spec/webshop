<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Product;

// use Symfony\Component\Config\FileLocator;


class ProductController extends AbstractController {

    public function __construct(private ManagerRegistry $doctrine) {
        // entitiy manager
        $this->em = $doctrine->getManager();
    }

    /**
     * Get data from database.
     * @Route("/api/products", name="product_list")
     */
    public function index(): JsonResponse {

        $data = $this->doctrine->getRepository(Product::class)->findAll();
    
        foreach ($data as $param) 
        {
            $products[] =
            [
                'id' => $param->getId(),
                'code' => $param->getCode(),
                'name' => $param->getName(),
                'price' => $param->getPrice(),
                'description' => $param->getDescription(),
                'image' => $param->getImage(),
                'category' => $param->getCategory()
            ];
        }

        return $this->json($products);
        // return $this->json($data, $status = 200);
    }

    /**
     * Store data into database.
     * @Route("/api/products/create", name="product_create", methods="POST")
     */
    public function create(Request $request): Response 
    {
        $data = json_decode($request->getContent(), true);
        
        if (count($data) > 1)
        {
            foreach ($data as $param) 
            {
                $product = new Product();
                $product->setCode($param['code']);
                $product->setName($param['name']);
                $product->setPrice($param['price']);
                $product->setDescription($param['description']);
                $product->setImage($param['image']);
                $product->setCategory($param['category']);

                // Create a sql with doctrine metadata to add an entity.
                $this->em->persist($product);
                // Execute query to database.
                $this->em->flush();
            }

        } else
        {
            $product = new Product();
            $product->setCode($data['code']);
            $product->setName($data['name']);
            $product->setPrice($data['price']);
            $product->setDescription($data['description']);
            $product->setImage($data['image']);
            $product->setCategory($data['category']);
    
            $this->em->persist($product);
            $this->em->flush();
        }

        return new Response('Created succsessfully.');
    }

    /**
     * Update data in database.
     * @Route("/api/products/update/{code}", name="product_update", methods="PUT")
     */
    public function update(Request $request, $code): Response 
    {
        if (!$code) {
            throw $this->createNotFoundException('No code found');
        }

        $product = $this->doctrine->getRepository(Product::class)->find($code);

        $data = json_decode($request->getContent(), true);

        // foreach ($data as $key => $value)
        // {
        //     switch ($key)
        //     {
        //         case 'code':
        //             $product->setCode($value);
        //             break;
        //         case 'name':
        //             $product->setName($value);
        //             break;
        //         case 'price':
        //             $product->setPrice($value);
        //             break;
        //         case 'description':
        //             $product->setDescription($value);
        //             break;
        //         case 'image':
        //             $product->setImage($value);
        //             break;
        //     }
        // }

        $product->setCode($data['code']);
        $product->setName($data['name']);
        $product->setPrice($data['price']);
        $product->setDescription($data['description']);
        $product->setImage($data['image']);

        $this->em->persist($product);
        $this->em->flush();

        // var_dump($product);

        return new Response('Updated succsessfully.');
    }
        
    /**
     * @Route("/api/products/delete/{code}", name="delete_api", methods="DELETE")
     */
    public function delete_api($code): Response
    {
        $product = $this->doctrine->getRepository(Product::class)->find($code);

        if (!$product) {
            throw $this->createNotFoundException('No product found.');
        }
        
        // var_dump($product);

        $this->em->remove($product);
        $this->em->flush();

        return new Response('Deleted product with code '.$product->getCode());
    }
}